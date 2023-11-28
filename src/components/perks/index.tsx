import { ReactNode } from 'react';
import * as S from './styles';

interface PerksProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBackground: string;
}

export function Perks({ icon, text, iconBackground }: PerksProps) {
  return (
    <S.PerksWithIconContainer>
      <S.PerksContainer iconbg={iconBackground}>{icon}</S.PerksContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </S.PerksWithIconContainer>
  );
}
