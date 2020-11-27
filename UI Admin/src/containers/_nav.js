// Phần xử lý config cho sidebar
export default [
  {
    // Tag bảng điều khiển: biểu đồ doanh thu
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
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
    name: 'Sản phẩm',
    route: '/buttons',
    icon: 'cil-fastfood',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách sản phẩm',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm sản phẩm',
        to: '/buttons/brand-buttons',
      },
    ],
  },
  {
    // Tag con quản lý sản phẩm trong kho
    _tag: 'CSidebarNavItem',
    name: 'Chi tiết sản phẩm',
    to: '/theme', // Sẽ cập nhật lại đường dẫn sau
    icon: 'cil-window-restore',
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
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

