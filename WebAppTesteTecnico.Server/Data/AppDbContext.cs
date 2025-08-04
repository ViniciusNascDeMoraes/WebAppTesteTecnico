using Microsoft.EntityFrameworkCore;
using WebAppTesteTecnico.Server.Models;

namespace WebAppTesteTecnico.Server.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Paciente> Pacientes => Set<Paciente>();
        public DbSet<Atendimento> Atendimentos => Set<Atendimento>();
        public DbSet<Triagem> Triagens => Set<Triagem>();
    }
}
