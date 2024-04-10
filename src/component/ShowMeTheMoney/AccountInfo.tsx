import { CopyOutlined } from '@ant-design/icons';
import './styles.scss';
import payImage from '../../../public/images/kakaopay.png';
import { message } from 'antd';

export interface IParentProps {
  items: Array<IProps>;
}
const AccountInfo = ({ items }: IParentProps) => {
  return (
    <div className='accountInfo'>
      {items.map((item) => (
        <Account
          level={item.level}
          name={item.name}
          bank={item.bank}
          number={item.number}
        ></Account>
      ))}
    </div>
  );
};

export interface IProps {
  level: string;
  name: string;
  bank: string;
  number: string;
}

const Account = ({ level, name, bank, number }: IProps) => {
  const copyAction = (number) => {
    navigator.clipboard
      .writeText(number)
      .then(() => message.success('계좌번호가 복사되었습니다.'))
      .catch((error) => console.error(error));
  };

  return (
    <div className='accounts'>
      <span className='level'> {level} </span>
      <span className='name'> {name} </span>
      {level == '신 랑' ? (
        <span
          className='number'
          style={{ color: '#d4b508' }}
          onClick={() => {
            window.location.href = 'https://link.kakaopay.com/_/gN4_Tln';
          }}
        >
          {`${bank} ${number}`}
        </span>
      ) : (
        <span className='number'>{`${bank} ${number}`}</span>
      )}
      <span>
        <CopyOutlined onClick={() => copyAction(number)} />
      </span>
    </div>
  );
};

export default AccountInfo;
