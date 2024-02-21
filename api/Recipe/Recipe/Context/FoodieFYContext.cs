using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Recipe.Models;

namespace Recipe.Context
{
    public partial class FoodieFYContext : DbContext
    {
        public FoodieFYContext()
        {
        }

        public FoodieFYContext(DbContextOptions<FoodieFYContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Carts { get; set; } = null!;
        public virtual DbSet<CartItem> CartItems { get; set; } = null!;
        public virtual DbSet<Post> Posts { get; set; } = null!;
        public virtual DbSet<Recipe.Models.Recipe> Recipes { get; set; } = null!;
        public virtual DbSet<RecipePost> RecipePosts { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<UserMaster> UserMasters { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart");

                entity.HasIndex(e => e.Userid, "UQ__Cart__CBA1B256C8EA079C")
                    .IsUnique();

                entity.Property(e => e.CartId).HasColumnName("cartId");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Cart)
                    .HasForeignKey<Cart>(d => d.Userid)
                    .HasConstraintName("FK__Cart__userid__3F466844");
            });

            modelBuilder.Entity<CartItem>(entity =>
            {
                entity.ToTable("CartItem");

                entity.HasIndex(e => new { e.Cartid, e.Recipeid }, "UQ__CartItem__ED774178747B0893")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cartid).HasColumnName("cartid");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Recipeid).HasColumnName("recipeid");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.CartItems)
                    .HasForeignKey(d => d.Cartid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CartItem__cartid__45F365D3");

                entity.HasOne(d => d.Recipe)
                    .WithMany(p => p.CartItems)
                    .HasForeignKey(d => d.Recipeid)
                    .HasConstraintName("FK__CartItem__recipe__46E78A0C");
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post");

                entity.Property(e => e.PostId).HasColumnName("post_id");

                entity.Property(e => e.Imgs)
                    .HasMaxLength(1)
                    .HasColumnName("imgs");

                entity.Property(e => e.Likes).HasColumnName("likes");

                entity.Property(e => e.PostDatetime)
                    .HasColumnType("datetime")
                    .HasColumnName("post_datetime");
            });

            modelBuilder.Entity<Recipe.Models.Recipe>(entity =>
            {
                entity.HasIndex(e => e.Recipename, "UQ__Recipes__C2C20F9D60C12AD0")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CookingTime).HasColumnName("cooking_time");

                entity.Property(e => e.CuisineType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cuisine_type");

                entity.Property(e => e.Imgs)
                    .HasMaxLength(1)
                    .HasColumnName("imgs");

                entity.Property(e => e.Ingredients)
                    .IsUnicode(false)
                    .HasColumnName("ingredients");

                entity.Property(e => e.MealType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("meal_type");

                entity.Property(e => e.Recipename)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("recipename");
            });

            modelBuilder.Entity<RecipePost>(entity =>
            {
                entity.HasKey(e => e.RecipepostsId)
                    .HasName("PK__RecipePo__68B6C5EDFEAA641B");

                entity.HasIndex(e => e.PostId, "UQ__RecipePo__3ED78767F957D084")
                    .IsUnique();

                entity.Property(e => e.RecipepostsId).HasColumnName("recipeposts_id");

                entity.Property(e => e.PostId).HasColumnName("post_id");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Post)
                    .WithOne(p => p.RecipePost)
                    .HasForeignKey<RecipePost>(d => d.PostId)
                    .HasConstraintName("FK__RecipePos__post___4D94879B");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RecipePosts)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FK__RecipePos__useri__4CA06362");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.HasIndex(e => e.Rolename, "UQ__Role__4685A062D6CB2CF1")
                    .IsUnique();

                entity.Property(e => e.Roleid).HasColumnName("roleid");

                entity.Property(e => e.Rolename)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("rolename");
            });

            modelBuilder.Entity<UserMaster>(entity =>
            {
                entity.HasKey(e => e.Userid)
                    .HasName("PK__UserMast__CBA1B257BD6031CB");

                entity.ToTable("UserMaster");

                entity.HasIndex(e => new { e.Username, e.Roleid }, "UQ__UserMast__CF0251CD26961904")
                    .IsUnique();

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Roleid).HasColumnName("roleid");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserMasters)
                    .HasForeignKey(d => d.Roleid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserMaste__rolei__3B75D760");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
