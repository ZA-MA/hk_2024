using Microsoft.EntityFrameworkCore;
using System.Drawing;
using hk_2024_backend.Models;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;

namespace hk_2024_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<Zayavk> Zayavks { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasOne(x => x.login)
                .WithMany()
                .HasForeignKey(x => x.login_id);

            modelBuilder.Entity<User>()
                .HasOne(x => x.role)
                .WithMany()
                .HasForeignKey(x => x.role_id);

            modelBuilder.Entity<Offer>()
               .HasOne(x => x.user)
               .WithMany()
               .HasForeignKey(x => x.user_id);

            modelBuilder.Entity<Zayavk>()
               .HasOne(x => x.offer)
               .WithMany()
               .HasForeignKey(x => x.offer_id);

        }
    }
}
