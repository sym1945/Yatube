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
        private readonly ILogger<VideoController> _Logger;
        private readonly YatubeContext _Context;

        public VideoController(YatubeContext context, ILogger<VideoController> logger)
        {
            _Logger = logger;
            _Context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Video>> Get()
        {
            throw new NotImplementedException();


            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = Random.Shared.Next(-20, 55),
            //    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            //})
            //.ToArray();
        }
    }
}