using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectDetailsAPI.Models
{
    public class ResponseUpdate
    {
        public string status { set; get; }
        public int projectId { set; get; }
        public string message { set; get; }
    }
}
