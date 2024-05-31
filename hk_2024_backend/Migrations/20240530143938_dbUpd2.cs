using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace hk_2024_backend.Migrations
{
    /// <inheritdoc />
    public partial class dbUpd2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "numberFlat",
                table: "Users",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "numberFlat",
                table: "Users");
        }
    }
}
