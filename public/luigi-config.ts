Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'auth',
        label: 'Autenticação',
        icon: 'account',
        viewUrl: 'http://localhost:3000',
        children: []
      },
      {
        pathSegment: 'dashboard',
        label: 'Dashboard',
        icon: 'grid',
        viewUrl: 'http://localhost:3001',
        children: [
          { pathSegment: 'inicial', label: 'Inicial', icon: 'home', viewUrl: 'http://localhost:3001/dashboard/inicial' },
          { pathSegment: 'investimentos', label: 'Investimentos', icon: 'line-chart', viewUrl: 'http://localhost:3001/dashboard/investimentos' },
          { pathSegment: 'cartoes', label: 'Cartões', icon: 'credit-card', viewUrl: 'http://localhost:3001/dashboard/cartoes' },
          { pathSegment: 'servicos', label: 'Serviços', icon: 'wrench', viewUrl: 'http://localhost:3001/dashboard/servicos' },
          { pathSegment: 'configuracoes', label: 'Configurações', icon: 'settings', viewUrl: 'http://localhost:3001/dashboard/configuracoes' }
        ]
      }
    ]
  },
});
