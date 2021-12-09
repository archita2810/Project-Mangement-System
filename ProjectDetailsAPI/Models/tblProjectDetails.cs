using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectDetailsAPI.Models
{
    public class tblProjectDetails
    {
        public int projectId { get; set; }

        public string projectName { get; set; }
        public string reason { get; set; }
        public string type { get; set; }
        public string division { get; set; }
        public string category { get; set; }
        public string priority { get; set; }
        public string department { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }
        public string location { get; set; }
        public string status { get; set; }

    }
}
