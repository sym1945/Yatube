using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Yatube.Models
{
    public class Actor
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar")]
        [StringLength(20)]
        public string Name { get; set; } = "";

        public IList<VideoActor>? VideoActors { get; set; }
    }
}
