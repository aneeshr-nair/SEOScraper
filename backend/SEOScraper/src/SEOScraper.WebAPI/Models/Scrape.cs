using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEOScraper.WebAPI.Models
{
    public class Scrape
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public string Engine { get; set; }
        public int count { get; set; }
    }
}
