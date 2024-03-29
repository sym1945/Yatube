using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Yatube.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var services = builder.Services;

services.AddControllersWithViews();
services.AddDbContext<YatubeContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(
    new StaticFileOptions
    { 
        FileProvider = new PhysicalFileProvider("D:\\images"),
        RequestPath = "/staticfiles"
    }
    );
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
