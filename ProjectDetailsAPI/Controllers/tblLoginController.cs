using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectDetailsAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectDetailsAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class tblLoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public tblLoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpPost]
        public Response GettblLogin(tblLogin login)
        {

            string query = @"
                select *
                from dbo.tblLogin
                where email = '" + login.email + @"'
                and password = '" + login.password + @"'
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

            if (table.Rows.Count != 0)
            {
                return new Response{status="Success", message="Login Successful"};
            }
            else
            {

                return new Response {status = "Fail", message = "Invalid Credentials"};
            }
        }

    

    }
}
