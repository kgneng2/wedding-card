import { CopyOutlined } from '@ant-design/icons';
import './styles.scss';
import payImage from '../../../public/images/kakaopay.png';

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
      {/* <div className='accounts'>
        <small> 신랑 </small>
        <b className='name'> 강준영 </b>
        <span className='number'> 신한은행 110-453-276211</span>
        <CopyOutlined onClick={() => copyAction('110-453-276211')} />
      </div>
      <div className='accounts'></div>
      <div className='accounts'>dddd</div> */}
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
      .then(() => alert('계좌번호가 복사되었습니다.'))
      .catch((error) => console.error(error));
  };

  return (
    <div className='accounts'>
      <small> {level} </small>
      <b className='name'> {name} </b>

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
