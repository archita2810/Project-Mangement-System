using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectDetailsAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectDetailsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class tblProjectDetailsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public tblProjectDetailsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // API to add Project
        [Route("add")]
        [HttpPost]
        public Response Post(tblProjectDetails projdt)
        {
            string query = @"
                            insert into dbo.tblProjectDetails
                (projectName, reason, type, division, category, priority, department, startDate, endDate, location, status)
                values
                (
                '" + projdt.projectName + @"'
                ,'" + projdt.reason + @"'
                ,'" + projdt.type + @"'
                ,'" + projdt.division + @"'
                ,'" + projdt.category + @"'
                ,'" + projdt.priority + @"'
                ,'" + projdt.department + @"'
                ,'" + projdt.startDate + @"'
                ,'" + projdt.endDate + @"'
                ,'" + projdt.location + @"'
                ,'" + projdt.status + @"'
                )
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TaskAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new Response { status = "Success", message = "Added Successfully" };
        }


        // API to List Project
        [Route("list")]
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select projectId, projectName, convert(varchar(10),startDate,120) as startDate, convert(varchar(10),endDate,120) as endDate,
                reason, type, division, category, priority, department, location, status
                from dbo.tblProjectDetails
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TaskAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        //API to Update 'Status'
        [HttpPatch]
        public ResponseUpdate Patch(tblProjectDetails projdt)
        {
            string query = @"
                update dbo.tblProjectDetails set 
                status = '" + projdt.status + @"'
                where  projectId = " + projdt.projectId + @"
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TaskAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

              return new ResponseUpdate { status = "Success", projectId = projdt.projectId, message = "Status Updated Successfully" };
        }



        //API to Show Project Counters
        [Route("count")]
        [HttpGet]
        public JsonResult GetCount()
        {
            string query = @"
                select status, COUNT(*) FROM dbo.tblProjectDetails
                GROUP BY status
                ";
                
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TaskAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                   table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        //API for graph
        [Route("graph")]
        [HttpGet]
        public JsonResult GetGraph()
        {
            string query = @"
                SELECT department, status, count(*) as count
                FROM dbo.tblProjectDetails
                WHERE status = 'Close' OR status = 'Registered'
                GROUP BY department, status
                ORDER BY department
                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TaskAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


    }
}
