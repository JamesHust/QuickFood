// Phần xử lý config cho sidebar
export default [
  {
    // Tag bảng điều khiển: biểu đồ doanh thu
    _tag: 'CSidebarNavItem',
    name: 'Trang chủ',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // Tag Phiên làm việc
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Phiên làm việc']
  },
  {
    // Tag con trò chuyện với khách hàng
    _tag: 'CSidebarNavItem',
    name: 'Chat',
    addLinkClass: 'c-disabled',
    'disabled': true,
    // to: '/theme/colors', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cilChatBubble',
  },
  {
    // Tag con danh sách hóa đơn đợi
    _tag: 'CSidebarNavItem',
    name: 'Hàng đợi',
    to: '/session/billqueue', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cilAvTimer',
  },
  {
    // Tag con danh sách hóa đơn đợi
    _tag: 'CSidebarNavItem',
    name: 'Đơn hàng đã nhận',
    to: '/session/billreceived', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cilLineWeight',
  },
  // Tag Quản lý hóa đơn
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý hóa đơn']
  },
  {
    // Tag con danh sách hóa đơn
    _tag: 'CSidebarNavItem',
    name: 'Danh sách hóa đơn',
    to: '/theme/', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cil-library',
  },
  {
    // Tag con danh sách hóa đơn
    _tag: 'CSidebarNavItem',
    name: 'Chi tiết hóa đơn',
    to: '/theme/colors', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cil-library',
  },
  // Tag bố Quản lý sản phẩm
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý sản phẩm']
  },
  {
    // Tag con quản lý thông tin sản phẩm
    _tag: 'CSidebarNavDropdown',
    name: 'Danh sách sản phẩm',
    to: '/theme/colors',
    icon: 'cil-fastfood',
  },
  {
    // Tag con quản lý sản phẩm trong kho
    _tag: 'CSidebarNavItem',
    name: 'Kho sản phẩm',
    to: '/theme/typography', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cil-window-restore',
  },
  // Tag bố Quản lý tài khoản
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý tài khoản']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tài khoản',
    route: '/buttons',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Thông tin tài khoản',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách tài khoản',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm tài khoản',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Phân quyền',
        to: '/buttons/button-groups',
      },
    ],
  },
  {
    // Tag con phân quyền cho tài khoản
    _tag: 'CSidebarNavItem',
    name: 'Lịch phiên làm việc',
    to: '/theme/typography', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cil-calendar',
  }
]

