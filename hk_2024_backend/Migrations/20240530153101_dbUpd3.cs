using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace hk_2024_backend.Migrations
{
    /// <inheritdoc />
    public partial class dbUpd3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "date",
                table: "Offers",
                newName: "dateStart");

            migrationBuilder.AlterColumn<DateTime>(
                name: "dateEnd",
                table: "Offers",
                type: "timestamp without time zone",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "dateStart",
                table: "Offers",
                newName: "date");

            migrationBuilder.AlterColumn<DateTime>(
                name: "dateEnd",
                table: "Offers",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldNullable: true);
        }
    }
}
