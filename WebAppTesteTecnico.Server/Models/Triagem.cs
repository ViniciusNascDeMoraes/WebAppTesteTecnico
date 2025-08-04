namespace WebAppTesteTecnico.Server.Models
{
    public class Triagem
    {
        public int Id { get; set; }
        public int AtendimentoId { get; set; }
        public Atendimento? Atendimento { get; set; }
        public string Sintomas { get; set; } = string.Empty;
        public string PressaoArterial { get; set; } = string.Empty;
        public string Peso { get; set; } = string.Empty;
        public string Altura { get; set; } = string.Empty;
    }
}
