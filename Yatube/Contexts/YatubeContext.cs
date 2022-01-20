using Microsoft.EntityFrameworkCore;
using Yatube.Models;

namespace Yatube.Contexts
{
    public class YatubeContext : DbContext
    {
        public DbSet<Video>? Videos { get; set; }
        public DbSet<Creator>? Creators { get; set; }
        public DbSet<Actor>? Actors { get; set; }
        public DbSet<Tag>? Tags { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.;Database=YatubeDB;Trusted_Connection=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Video - Creator
            modelBuilder.Entity<Video>()
                .HasOne(video => video.Creator)
                .WithMany(creator => creator.Videos)
                .HasForeignKey(video => video.CreatorId)
                .OnDelete(DeleteBehavior.SetNull);

            // Video - Actor
            modelBuilder.Entity<VideoActor>().HasKey(va => new { va.VideoId, va.ActorId });

            modelBuilder.Entity<VideoActor>()
                .HasOne(va => va.Video)
                .WithMany(video => video.VideoActors)
                .HasForeignKey(va => va.VideoId);

            modelBuilder.Entity<VideoActor>()
                .HasOne(va => va.Actor)
                .WithMany(actor => actor.VideoActors)
                .HasForeignKey(va => va.ActorId);

            // Video - Tag
            modelBuilder.Entity<VideoTag>().HasKey(va => new { va.VideoId, va.TagId });

            modelBuilder.Entity<VideoTag>()
                .HasOne(vt => vt.Video)
                .WithMany(video => video.VideoTags)
                .HasForeignKey(vt => vt.VideoId);

            modelBuilder.Entity<VideoTag>()
                .HasOne(vt => vt.Tag)
                .WithMany(tag => tag.VideoTags)
                .HasForeignKey(vt => vt.TagId);


        }
    }
}
