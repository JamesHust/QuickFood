CREATE SCHEMA `quick_food` ;
use `quick_food`;

CREATE TABLE `admin_shop` (
  `ShopId` varchar(36) NOT NULL COMMENT 'Id cửa hàng',
  `ShopCode` varchar(50) NOT NULL COMMENT 'Mã cửa hàng',
  `Email` varchar(255) NOT NULL COMMENT 'Địa chỉ email',
  `Password` varchar(255) NOT NULL COMMENT 'Mật khẩu',
  `Phone` varchar(50) NOT NULL COMMENT 'Số điện thoại',
  `CreateDate` datetime NOT NULL COMMENT 'Ngày tạo tài khoản',
  `UpdateDate` datetime DEFAULT NULL COMMENT 'Ngày cập nhật tài khoản gần đay nhất',
  PRIMARY KEY (`ShopId`),
  UNIQUE KEY `Id_UNIQUE` (`ShopId`),
  UNIQUE KEY `ShopCode_UNIQUE` (`ShopCode`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Quản trị cửa hàng';

CREATE TABLE `area` (
  `Id` varchar(36) NOT NULL COMMENT 'Id khu vực',
  `Code` varchar(50) NOT NULL COMMENT 'Mã khu vực',
  `Name` varchar(255) NOT NULL COMMENT 'Tên khu vực',
  `Kind` int NOT NULL COMMENT 'Loại khu vực',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  UNIQUE KEY `Code_UNIQUE` (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Khu vực (địa chỉ)';

CREATE TABLE `customer` (
  `Id` varchar(36) NOT NULL COMMENT 'Id khách hàng',
  `Code` varchar(255) NOT NULL COMMENT 'Mã khách hàng',
  `FullName` varchar(255) NOT NULL COMMENT 'Họ tên khách hàng',
  `PhoneNumber` varchar(50) NOT NULL COMMENT 'Số điện thoại',
  `Email` varchar(50) NOT NULL COMMENT 'Địa chỉ email',
  `Gender` int DEFAULT NULL COMMENT 'Giới tính ( 0-Nữ, 1-Nam, 2-Khác)',
  `Birthday` date DEFAULT NULL COMMENT 'Ngày sinh',
  `Password` varchar(255) NOT NULL COMMENT 'Mật khẩu',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  UNIQUE KEY `Code_UNIQUE` (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Khách hàng';

CREATE TABLE `customer_address` (
  `Id` int NOT NULL AUTO_INCREMENT COMMENT 'Mã sổ địa chỉ',
  `CustomerName` varchar(255) NOT NULL COMMENT 'Tên khách hàng sẽ nhận hóa đơn',
  `Company` varchar(255) DEFAULT NULL COMMENT 'Công ty',
  `PhoneNumber` varchar(50) NOT NULL COMMENT 'Số điện thoại liên hệ khi đặt đơn',
  `Province` varchar(255) NOT NULL COMMENT 'Tên tỉnh/thành phố',
  `District` varchar(255) NOT NULL COMMENT 'Tên quận/huyện',
  `Ward` varchar(255) NOT NULL COMMENT 'Tên xã/phường',
  `Address` varchar(255) NOT NULL COMMENT 'Địa chỉ',
  `TypeAddress` int NOT NULL COMMENT 'Loại địa chỉ (0-Nhà riêng/Chung cư, 1-Cơ quan/Công ty)',
  `CustomerId` varchar(36) NOT NULL COMMENT 'Mã khách hàng',
  `AddressDefault` int NOT NULL COMMENT 'Đặt địa chỉ mặc định (1-Đặt, 2-Không đặt)',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Sổ địa chỉ khách hàng';

CREATE TABLE `info_shop` (
  `ShopId` varchar(36) NOT NULL,
  `Name` varchar(255) NOT NULL COMMENT 'Tên cửa hàng',
  `PeopleInvolve` varchar(255) NOT NULL COMMENT 'Tên người đại diện cửa hàng',
  `Titular` int NOT NULL COMMENT 'Đăng ký dưới danh nghĩa (0-Cá nhân, 1-Công ty)',
  `Tax` varchar(25) DEFAULT NULL COMMENT 'Mã số thuế',
  `Position` int NOT NULL COMMENT 'Vị trí (0-Nhân viên, 1-Quản lý)',
  `Email` varchar(50) NOT NULL COMMENT 'Email liên hệ cửa hàng',
  `Phone` varchar(50) NOT NULL COMMENT 'Số điện thoại',
  `PhoneOther` varchar(50) DEFAULT NULL COMMENT 'Số điện thoại khác',
  `IdentityCode` varchar(50) NOT NULL COMMENT 'Số chứng minh thư/CMND/Tprocessing_billhẻ căn cước của người đại diện',
  `IdentityDateFrom` date DEFAULT NULL COMMENT 'Ngày cấp chứng minh thư/CMND/Thẻ căn cước',
  `IdentityPlace` varchar(255) DEFAULT NULL COMMENT 'Nơi cấp chứng minh thư/CMND/Thẻ căn cước',
  `TimeOpen` varchar(255) NOT NULL COMMENT 'Thời gian mở cửa trong ngày',
  `TimeClose` varchar(255) NOT NULL COMMENT 'Thời gian đóng cửa trong ngày',
  `BusinessRegistration` varchar(255) NOT NULL COMMENT 'Ảnh đăng ký kinh doanh',
  `Avatar` varchar(255) DEFAULT NULL COMMENT 'Ảnh đại diện quán',
  `FrontShopImg` varchar(255) NOT NULL COMMENT 'Ảnh mặt tiền quán',
  PRIMARY KEY (`ShopId`),
  UNIQUE KEY `ShopId_UNIQUE` (`ShopId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Thông tin chi tiết cửa hàng';