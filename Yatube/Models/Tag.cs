using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yatube.Models
{
    public class Tag
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "varchar")]
        [StringLength(20)]
        public string Content { get; set; } = string.Empty;

        public IList<VideoTag>? VideoTags { get; set; }
    }
}
