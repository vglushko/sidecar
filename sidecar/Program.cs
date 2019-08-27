using System;
using System.IO;
using System.Net;
using System.Reflection;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace sidecar
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args)
                .Build()
                .Run();
        }

        private static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location))
                .AddJsonFile("appsettings.json")
                .Build();

            return WebHost
                .CreateDefaultBuilder(args)                
                .UseKestrel(options => 
                {
                    options.Listen(IPAddress.Loopback, config.GetValue<int>("Host:Port"));
                })
                .UseStartup<Startup>();
        }
    }    
}