module.exports = function ({ addUtilities } : any) {
    addUtilities({
      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'none',
  
        /* Firefox */
        'scrollbar-width': 'none',
  
        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      '.scrollbar-default': {
        /* IE and Edge */
        '-ms-overflow-style': 'auto',
  
        /* Firefox */
        'scrollbar-width': 'auto',
  
        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'block',
        },
      },
    });
  };
  