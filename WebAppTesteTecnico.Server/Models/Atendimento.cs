namespace WebAppTesteTecnico.Server.Models
{
    public class Atendimento
    {
        public int Id { get; set; }
        public int NumeroSequencial { get; set; }
        public int PacienteId { get; set; }
        public Paciente? Paciente { get; set; }
        public DateTime DataHoraChegada { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}
