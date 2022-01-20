namespace Yatube.Models
{
    public class VideoActor
    {
        public int VideoId { get; set; }
        public Video? Video { get; set; }
        public int ActorId { get; set; }
        public Actor? Actor { get; set; }
    }
}
