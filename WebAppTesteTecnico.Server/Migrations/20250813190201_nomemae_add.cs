using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAppTesteTecnico.Server.Migrations
{
    /// <inheritdoc />
    public partial class nomemae_add : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomeMae",
                table: "Pacientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeMae",
                table: "Pacientes");
        }
    }
}
