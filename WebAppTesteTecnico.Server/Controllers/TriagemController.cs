using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAppTesteTecnico.Server.Data;
using WebAppTesteTecnico.Server.Models;

namespace WebAppTesteTecnico.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TriagemController(AppDbContext database) : ControllerBase
    {
        private readonly AppDbContext Database = database;

        [HttpGet]
        public async Task<List<Triagem>> AllTriagens()
        {
            return await Database.Triagens
                .Include(triagem => triagem.Atendimento)
                .ToListAsync();
        }

        [HttpPost]
        public async Task NewTriagem(Triagem triagem)
        {
            var atendimento = await Database.Atendimentos.FindAsync(triagem.AtendimentoId);

            atendimento.Status = "Triagem Feita";

            Database.Atendimentos.Update(atendimento);

            await Database.Triagens.AddAsync(triagem);
            await Database.SaveChangesAsync();
        }
    }
}
