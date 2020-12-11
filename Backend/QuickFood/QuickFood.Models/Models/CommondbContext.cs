using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class CommondbContext : DbContext
    {
        public CommondbContext()
        {
        }

        public CommondbContext(DbContextOptions<CommondbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminShop> AdminShops { get; set; }
        public virtual DbSet<Area> Areas { get; set; }
        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public virtual DbSet<Dish> Dishes { get; set; }
        public virtual DbSet<DishSold> DishSolds { get; set; }
        public virtual DbSet<ImportMaterial> ImportMaterials { get; set; }
        public virtual DbSet<Item> Items { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderHistory> OrderHistories { get; set; }
        public virtual DbSet<OrderSuccess> OrderSuccesses { get; set; }
        public virtual DbSet<PositionShop> PositionShops { get; set; }
        public virtual DbSet<ReceivedOrder> ReceivedOrders { get; set; }
        public virtual DbSet<ScheduleShop> ScheduleShops { get; set; }
        public virtual DbSet<Shop> Shops { get; set; }
        public virtual DbSet<Wishlist> Wishlists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=123456;database=quick_food", x => x.ServerVersion("8.0.21-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminShop>(entity =>
            {
                entity.ToTable("admin_shop");

                entity.HasComment("Quản trị cửa hàng");

                entity.HasIndex(e => e.Id, "AdminId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "Email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.ShopId, "Id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.PositionCode, "admin_shop_fk_position_idx");

                entity.Property(e => e.Id)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id quản lý cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo tài khoản");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Địa chỉ email")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Mật khẩu")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Số điện thoại")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PositionCode).HasComment("Mã vị trí/chức vụ trong cửa hàng");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày cập nhật tài khoản gần đay nhất");

                entity.HasOne(d => d.PositionCodeNavigation)
                    .WithMany(p => p.AdminShops)
                    .HasForeignKey(d => d.PositionCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("admin_shop_fk_position");

                entity.HasOne(d => d.Shop)
                    .WithOne(p => p.AdminShop)
                    .HasForeignKey<AdminShop>(d => d.ShopId)
                    .HasConstraintName("admin_shop_fk_shop");
            });

            modelBuilder.Entity<Area>(entity =>
            {
                entity.ToTable("area");

                entity.HasComment("Khu vực (địa chỉ)");

                entity.HasIndex(e => e.Code, "Code_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Id, "Id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khu vực")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Mã khu vực")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Kind).HasComment("Loại khu vực");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên khu vực")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("cart");

                entity.HasComment("Giỏ hàng");

                entity.HasIndex(e => e.CustomerId, "cart_fk_customer_idx");

                entity.HasIndex(e => e.DishId, "cart_fk_dish_idx");

                entity.Property(e => e.Amount).HasComment("Số lượng mua");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishName)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Note)
                    .HasColumnType("varchar(255)")
                    .HasComment("Ghi chú")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá bán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Customer)
                    .WithMany()
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cart_fk_customer");

                entity.HasOne(d => d.Dish)
                    .WithMany()
                    .HasForeignKey(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cart_fk_dish");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.HasComment("Loại món ăn");

                entity.HasIndex(e => e.CategoryCode, "CategoryCode_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.CategoryId, "CategoryId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.ItemId, "ItemId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.CategoryId)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id loại món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CategoryCode)
                    .ValueGeneratedOnAdd()
                    .HasComment("Mã loại món ăn");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên loại món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ItemId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Item)
                    .WithOne(p => p.Category)
                    .HasForeignKey<Category>(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("category_fk_item");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customer");

                entity.HasComment("Khách hàng");

                entity.HasIndex(e => e.Code, "Code_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Id, "Id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Avatar)
                    .HasColumnType("varchar(255)")
                    .HasComment("Ảnh đại diện khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Birthday)
                    .HasColumnType("date")
                    .HasComment("Ngày sinh");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Mã khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Địa chỉ email")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Họ tên khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Gender).HasComment("Giới tính ( 0-Nữ, 1-Nam, 2-Khác)");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Mật khẩu")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Số điện thoại")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<CustomerAddress>(entity =>
            {
                entity.ToTable("customer_address");

                entity.HasComment("Sổ địa chỉ khách hàng");

                entity.HasIndex(e => e.Id, "Id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.CustomerId, "address_fk_customer_idx");

                entity.Property(e => e.Id).HasComment("Mã sổ địa chỉ");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Địa chỉ")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.AddressDefault).HasComment("Đặt địa chỉ mặc định (1-Đặt, 2-Không đặt)");

                entity.Property(e => e.Company)
                    .HasColumnType("varchar(255)")
                    .HasComment("Công ty")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Mã khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên khách hàng sẽ nhận hóa đơn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.District)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên quận/huyện")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Số điện thoại liên hệ khi đặt đơn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Province)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên tỉnh/thành phố")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TypeAddress).HasComment("Loại địa chỉ (0-Nhà riêng/Chung cư, 1-Cơ quan/Công ty)");

                entity.Property(e => e.Ward)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên xã/phường")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerAddresses)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("address_fk_customer");
            });

            modelBuilder.Entity<Dish>(entity =>
            {
                entity.ToTable("dish");

                entity.HasComment("Món ăn");

                entity.HasIndex(e => e.CategoryId, "CategoryId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Code, "Code_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Id, "Id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.ItemId, "ItemId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.ShopId, "ShopId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Amount).HasComment("Số lượng món ăn trong ngày");

                entity.Property(e => e.CategoryId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Mã món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Mô tả sản phẩm")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Img)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Ảnh minh họa cho món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.IsSale).HasComment("Có giảm giá không (0-Không,  1-Có)");

                entity.Property(e => e.ItemId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá bán sản phẩm")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SalePercent)
                    .HasDefaultValueSql("'0'")
                    .HasComment("Phần trăm giảm giá (Chỉ có khi IsSale là 1)");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Stocking).HasComment("Còn hàng (0-Hết hàng, 1-Còn hàng)");

                entity.Property(e => e.TemporaryPrice)
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá tạm thời ( Chỉ có khi SalePercent khác 0)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TypeFood).HasComment("Kiểu món (0- Đồ ăn,  1-Đồ uống)");

                entity.HasOne(d => d.Category)
                    .WithOne(p => p.Dish)
                    .HasForeignKey<Dish>(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("dish_fk_category");

                entity.HasOne(d => d.Item)
                    .WithOne(p => p.Dish)
                    .HasForeignKey<Dish>(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("dish_fk_item");

                entity.HasOne(d => d.Shop)
                    .WithOne(p => p.Dish)
                    .HasForeignKey<Dish>(d => d.ShopId)
                    .HasConstraintName("dish_fk_shop");
            });

            modelBuilder.Entity<DishSold>(entity =>
            {
                entity.HasKey(e => e.DishId)
                    .HasName("PRIMARY");

                entity.ToTable("dish_sold");

                entity.HasComment("Món ăn đã bán được");

                entity.HasIndex(e => e.DishCode, "DishCode_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.DishId, "DishId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.ShopId, "ShopId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.DishId)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Amount).HasComment("Số lượng đã bán");

                entity.Property(e => e.DishCode)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Mã món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishName)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá đã bán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TimeoSell)
                    .HasColumnType("datetime")
                    .HasComment("Thời điểm bán");

                entity.HasOne(d => d.Dish)
                    .WithOne(p => p.DishSold)
                    .HasForeignKey<DishSold>(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sold_fk_dish");

                entity.HasOne(d => d.Shop)
                    .WithOne(p => p.DishSold)
                    .HasForeignKey<DishSold>(d => d.ShopId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sold_fk_shop");
            });

            modelBuilder.Entity<ImportMaterial>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("import_material");

                entity.HasComment("Thông tin nhập hàng");

                entity.HasIndex(e => e.ShopId, "ShopId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Amount)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tổng tiền")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo");

                entity.Property(e => e.Description)
                    .HasColumnType("varchar(255)")
                    .HasComment("Mô tả thông tin nhập hàng\n")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ImportDate)
                    .HasColumnType("date")
                    .HasComment("Ngày nhập");

                entity.Property(e => e.ShopId).HasComment("Id cửa hàng");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày cập nhật thông tin");
            });

            modelBuilder.Entity<Item>(entity =>
            {
                entity.ToTable("item");

                entity.HasComment("Các mục món");

                entity.HasIndex(e => e.Code, "Code_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Id, "Id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnType("varchar(36)")
                    .HasComment("ID mục món")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Code)
                    .ValueGeneratedOnAdd()
                    .HasComment("Mã mục món ");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên các mục món")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("order");

                entity.HasComment("Đơn đặt hàng (Khi giao dịch chưa thành công)");

                entity.HasIndex(e => e.OrderId, "OrderId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.CustomerId, "order_fk_customer_idx");

                entity.HasIndex(e => e.DishId, "order_fk_dish_idx");

                entity.HasIndex(e => e.ShopId, "order_fk_shop_idx");

                entity.Property(e => e.OrderId)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id đơn đặt hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Amount).HasComment("Số lượng mua");

                entity.Property(e => e.CartId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Mã giỏ hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OrderStatus).HasComment("Trạng thái đơn hàng");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá bán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Ship)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Phí ship")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Tên món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày cập nhật trạng thái gần nhất");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_fk_customer");

                entity.HasOne(d => d.Dish)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_fk_dish");

                entity.HasOne(d => d.Shop)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ShopId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_fk_shop");
            });

            modelBuilder.Entity<OrderHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("order_history");

                entity.HasComment("Lịch sử đặt hàng");

                entity.HasIndex(e => e.OrderId, "OrderId_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.CustomerId, "order_history_fk_customer_idx");

                entity.HasIndex(e => e.DishId, "order_history_fk_dish_idx");

                entity.Property(e => e.Amount).HasComment("Số lượng mua");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OrderId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id đơn đặt hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OrderStatus).HasComment("Trạng thái đơn hàng");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá bán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Ship)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Phí ship")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Customer)
                    .WithMany()
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_history_fk_customer");

                entity.HasOne(d => d.Dish)
                    .WithMany()
                    .HasForeignKey(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_history_fk_dish");
            });

            modelBuilder.Entity<OrderSuccess>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("order_success");

                entity.HasComment("Hóa đơn đã thành công");

                entity.HasIndex(e => e.CustomerId, "order_success_fk_customer_idx");

                entity.HasIndex(e => e.DishId, "order_success_fk_dish_idx");

                entity.HasIndex(e => e.ShopId, "order_success_fk_shop_idx");

                entity.Property(e => e.Amount).HasComment("Số lượng mua");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OrderId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id đơn đặt hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá bán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Ship)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Phí ship")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Tên món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Customer)
                    .WithMany()
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_success_fk_customer");

                entity.HasOne(d => d.Dish)
                    .WithMany()
                    .HasForeignKey(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_success_fk_dish");

                entity.HasOne(d => d.Shop)
                    .WithMany()
                    .HasForeignKey(d => d.ShopId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("order_success_fk_shop");
            });

            modelBuilder.Entity<PositionShop>(entity =>
            {
                entity.HasKey(e => e.Code)
                    .HasName("PRIMARY");

                entity.ToTable("position_shop");

                entity.HasComment("Vị trí, chức vụ trong cửa hàng");

                entity.HasIndex(e => e.Code, "Id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Code).HasComment("Mã vị trí");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên vị trí")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<ReceivedOrder>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("received_order");

                entity.HasComment("Hóa đơn đã nhận");

                entity.HasIndex(e => e.AdminShopReceivedId, "received_order_fk_admin_shop_idx");

                entity.HasIndex(e => e.CustomerId, "received_order_fk_customer_idx");

                entity.HasIndex(e => e.DishId, "received_order_fk_dish_idx");

                entity.HasIndex(e => e.ShopId, "received_order_fk_shop_idx");

                entity.Property(e => e.AdminShopReceivedId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id quản lý cửa hàng đã nhận đơn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Amount).HasComment("Số lượng mua");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OrderId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id đơn đặt hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá bán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ReceivedDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày nhận hóa đơn");

                entity.Property(e => e.Ship)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Phí ship")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Tên món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.AdminShopReceived)
                    .WithMany()
                    .HasForeignKey(d => d.AdminShopReceivedId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("received_order_fk_admin_shop");

                entity.HasOne(d => d.Customer)
                    .WithMany()
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("received_order_fk_customer");

                entity.HasOne(d => d.Dish)
                    .WithMany()
                    .HasForeignKey(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("received_order_fk_dish");

                entity.HasOne(d => d.Shop)
                    .WithMany()
                    .HasForeignKey(d => d.ShopId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("received_order_fk_shop");
            });

            modelBuilder.Entity<ScheduleShop>(entity =>
            {
                entity.HasKey(e => e.ShopId)
                    .HasName("PRIMARY");

                entity.ToTable("schedule_shop");

                entity.HasComment("Lịch mở quán");

                entity.Property(e => e.ShopId)
                    .HasColumnType("varchar(36)")
                    .HasComment("Id cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CloseTime)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Thời gian đóng cửa")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DayOfWeek).HasComment("Các thứ trong tuần (2-7, 8- Chủ nhật)");

                entity.Property(e => e.OpenTime)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Thời gian mở cửa")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Shop)
                    .WithOne(p => p.ScheduleShop)
                    .HasForeignKey<ScheduleShop>(d => d.ShopId)
                    .HasConstraintName("schedule_fk_shop");
            });

            modelBuilder.Entity<Shop>(entity =>
            {
                entity.ToTable("shop");

                entity.HasComment("Thông tin chi tiết cửa hàng");

                entity.HasIndex(e => e.ShopId, "ShopId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.ShopId)
                    .HasColumnType("varchar(36)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Địa chỉ (Số nhà và đường phố)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Avatar)
                    .HasColumnType("varchar(255)")
                    .HasComment("Ảnh đại diện quán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BeforeIdentityCardImg)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Ngày cấp chứng minh thư/CMND/Thẻ căn cước")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BehindIdentityCardImg)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Nơi cấp chứng minh thư/CMND/Thẻ căn cước")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BusinessRegistration)
                    .HasColumnType("varchar(255)")
                    .HasComment("Ảnh đăng ký kinh doanh")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ConfirmDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày được xác nhận hợp đồng");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasComment("Ngày tạo cửa hàng ");

                entity.Property(e => e.Cuisine).HasComment("Ẩm thực vùng nào");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Mô tả về quán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.District)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên quận/huyện")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Email liên hệ cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ForCustomer).HasComment("Đối tượng khách hàng");

                entity.Property(e => e.FrontShopImg)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Ảnh mặt tiền quán")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.IdentityCode)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Số chứng minh thư/CMND/Thẻ căn cước của người đại diện")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.KeyWord)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Từ khóa tìm kiếm")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.MenuImg)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Ảnh menu/thực đơn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PeopleInvolve)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên người đại diện cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Số điện thoại")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhoneOther)
                    .HasColumnType("varchar(50)")
                    .HasComment("Số điện thoại khác")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Position).HasComment("Vị trí/Chức vụ (0-Nhân viên, 1-Quản lý)");

                entity.Property(e => e.Province)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên tỉnh/thành phố")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Purpose).HasComment("Mục đích");

                entity.Property(e => e.ShopCode)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasComment("Mã cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SpecialDishes)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Món đặc biệt")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Tax)
                    .HasColumnType("varchar(25)")
                    .HasComment("Mã số thuế")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Titular).HasComment("Đăng ký dưới danh nghĩa (0-Cá nhân, 1-Công ty)");

                entity.Property(e => e.TypeShop).HasComment("Loại hình quán");

                entity.Property(e => e.Ward)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên xã/phường")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Wishlist>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("wishlist");

                entity.HasComment("Danh sách món ăn yêu thích");

                entity.HasIndex(e => e.CustomerId, "wishlist_fk_customer_idx");

                entity.HasIndex(e => e.DishId, "wishlist_fk_dish_idx");

                entity.HasIndex(e => e.ShopId, "wishlist_fk_shop_idx");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id khách hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id Món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DishName)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Tên món ăn")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasComment("Giá tiền")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShopId)
                    .IsRequired()
                    .HasColumnType("varchar(36)")
                    .HasComment("Id cửa hàng")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Customer)
                    .WithMany()
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("wishlist_fk_customer");

                entity.HasOne(d => d.Dish)
                    .WithMany()
                    .HasForeignKey(d => d.DishId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("wishlist_fk_dish");

                entity.HasOne(d => d.Shop)
                    .WithMany()
                    .HasForeignKey(d => d.ShopId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("wishlist_fk_shop");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
