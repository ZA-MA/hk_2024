using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace hk_2024_backend.Migrations
{
    /// <inheritdoc />
    public partial class dbUpd1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Logins_loginid",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "loginid",
                table: "Users",
                newName: "role_id");

            migrationBuilder.RenameIndex(
                name: "IX_Users_loginid",
                table: "Users",
                newName: "IX_Users_role_id");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Offers",
                newName: "user_id");

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    role = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_login_id",
                table: "Users",
                column: "login_id");

            migrationBuilder.CreateIndex(
                name: "IX_Offers_user_id",
                table: "Offers",
                column: "user_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Offers_Users_user_id",
                table: "Offers",
                column: "user_id",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Logins_login_id",
                table: "Users",
                column: "login_id",
                principalTable: "Logins",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Roles_role_id",
                table: "Users",
                column: "role_id",
                principalTable: "Roles",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Offers_Users_user_id",
                table: "Offers");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Logins_login_id",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Roles_role_id",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropIndex(
                name: "IX_Users_login_id",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Offers_user_id",
                table: "Offers");

            migrationBuilder.RenameColumn(
                name: "role_id",
                table: "Users",
                newName: "loginid");

            migrationBuilder.RenameIndex(
                name: "IX_Users_role_id",
                table: "Users",
                newName: "IX_Users_loginid");

            migrationBuilder.RenameColumn(
                name: "user_id",
                table: "Offers",
                newName: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Logins_loginid",
                table: "Users",
                column: "loginid",
                principalTable: "Logins",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
