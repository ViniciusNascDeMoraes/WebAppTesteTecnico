using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAppTesteTecnico.Server.Data;
using WebAppTesteTecnico.Server.Models;

namespace WebAppTesteTecnico.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController(AppDbContext database) : ControllerBase
    {
        private readonly AppDbContext Database = database;

        [HttpGet]
        public async Task<List<Paciente>> AllPacientes()
        {
            return await Database.Pacientes.ToListAsync();
        }

        [HttpPost]
        public async Task NewPaciente(Paciente paciente)
        {
            await Database.Pacientes.AddAsync(paciente);
            await Database.SaveChangesAsync();
        }
    }
}
