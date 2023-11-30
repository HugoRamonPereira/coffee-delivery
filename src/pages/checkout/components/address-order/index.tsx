import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/input';
import * as S from './styles';

type ErrorProps = {
  errors: {
    [key: string]: {
      message: string;
    };
  };
};

export function AddressOrder() {
  const { register, formState } = useFormContext();
  const { errors } = formState as ErrorProps;

  return (
    <S.AddressOrderContainer>
      <Input
        placeholder='CEP'
        className='cep'
        type='string'
        maxLength={9}
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder='Rua'
        className='street'
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder='Número'
        type='number'
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder='Complemento'
        className='complement'
        {...register('complement')}
        error={errors.complement?.message}
        endText='Opcional'
      />
      <Input
        placeholder='Bairro'
        {...register('neighborhood')}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder='Cidade'
        {...register('city')}
        error={errors.city?.message}
      />
      <Input placeholder='UF' {...register('uf')} error={errors.uf?.message} />
    </S.AddressOrderContainer>
  );
}
