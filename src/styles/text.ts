import { css } from 'styled-components';

export default css`
  .text-yellow {
    color: ${({ theme }) => theme.colors.product.yellow};
  }

  .text-yellow-light {
    color: ${({ theme }) => theme.colors.product.yellowLight};
  }

  .text-yellow-dark {
    color: ${({ theme }) => theme.colors.product.yellowDark};
  }

  .text-purple {
    color: ${({ theme }) => theme.colors.product.purple};
  }

  .text-purple-light {
    color: ${({ theme }) => theme.colors.product.purpleLight};
  }

  .text-purple-dark {
    color: ${({ theme }) => theme.colors.product.purpleDark};
  }

  .text-tiny {
    font-size: ${({ theme }) => theme.font.sizes.tiny};
  }

  .text-xsmall {
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }

  .text-small {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  .text-medium {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  .text-large {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }

  .text-xlarge {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }

  .text-xxlarge {
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  }

  .text-huge {
    font-size: ${({ theme }) => theme.font.sizes.huge};
  }
`;
