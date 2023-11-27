import { Input } from '../../../../components/input';
import * as S from './styles';

export function AddressOrder() {
  return (
    <S.AddressOrderContainer>
      <Input placeholder='CEP' className='cep' type='number' />
      <Input placeholder='Rua' className='street' />
      <Input placeholder='Número' type='number' />
      <Input placeholder='Complemento' className='complement' />
      <Input placeholder='Bairro' />
      <Input placeholder='Cidade' />
      <Input placeholder='UF' />
    </S.AddressOrderContainer>
  );
}
