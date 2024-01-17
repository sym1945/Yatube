using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Yatube.Contexts;
using Yatube.Models;

namespace Yatube.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VideoController : ControllerBase
    {
        // a
        private readonly ILogger<VideoController> _Logger;
        private readonly YatubeContext _Context;

        public VideoController(YatubeContext context, ILogger<VideoController> logger)
        {
            _Logger = logger;
            _Context = context;
        }

        [HttpGet]
        public IAsyncEnumerable<Video> Get()
        {
            var videos = _Context.Videos;
            if (videos == null)
                throw new NullReferenceException();

            return videos.AsAsyncEnumerable();
        }
    }
}