using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yatube.Models
{
    public class Video
    {
        [Key]
        public int Id { get; set; }
        public int? CreatorId { get; set; }
        public Creator? Creator { get; set; }
        public DateTime UploadDate { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }
        public int ViewCount { get; set; }
        [Column(TypeName = "nvarchar")]
        [StringLength(1000)]
        public string? Description { get; set; }
        [Column(TypeName = "varchar")]
        [StringLength(2083)]
        public string? ThumbnailImage { get; set; }
        [Column(TypeName = "varchar")]
        [StringLength(2083)]
        public string Url { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar")]
        [StringLength(50)]
        public string Title { get; set; } = string.Empty;


        public IList<VideoTag>? VideoTags { get; set; }
        public IList<VideoActor>? VideoActors { get; set; }
    }
}
