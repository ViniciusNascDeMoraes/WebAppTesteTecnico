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
            return await Database.Triagens.ToListAsync();
        }

        [HttpPost]
        public async Task NewTriagem(Triagem triagem)
        {
            Database.Atendimentos.Remove(await Database.Atendimentos.FindAsync(triagem.AtendimentoId));

            await Database.Triagens.AddAsync(triagem);
            await Database.SaveChangesAsync();
        }
    }
}
