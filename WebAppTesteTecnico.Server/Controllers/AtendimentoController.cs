using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAppTesteTecnico.Server.Data;
using WebAppTesteTecnico.Server.Models;

namespace WebAppTesteTecnico.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtendimentoController(AppDbContext database) : ControllerBase
    {
        private readonly AppDbContext Database = database;

        [HttpGet]
        public async Task<List<Atendimento>> AllAtendimentos()
        {
            return await Database.Atendimentos
                .Where(atendimento => atendimento.Status == "Esperando Triagem")
                .Include(atendimento => atendimento.Paciente)
                .OrderBy(atendimento => atendimento.NumeroSequencial)
                .ToListAsync();
        }

        [HttpPost]
        public async Task NewAtendimento(Atendimento atendimento)
        {
            var proximoNumeroSequencial = 1;

            if (Database.Atendimentos.Any())
            {
                proximoNumeroSequencial = await Database.Atendimentos
                    .MaxAsync(a => a.NumeroSequencial) + 1;
            }

            atendimento.NumeroSequencial = proximoNumeroSequencial;
            atendimento.DataHoraChegada = DateTime.UtcNow;
            atendimento.Status = "Esperando Triagem";

            await Database.Atendimentos.AddAsync(atendimento);
            await Database.SaveChangesAsync();
        }
    }
}
