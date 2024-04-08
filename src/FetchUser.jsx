import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const FetchUser = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const userData = response.data.map(user => {
          return {
            ...user,
            addressInfo: `${user.address.street}, ${user.address.suite}, ${user.address.city}, Zipcode : ${user.address.zipcode}`,
            geoLocation: `Lat : ${user.address.geo.lat}, Lng : ${user.address.geo.lng}`,
            companyInfo: `${user.company.name}, CatchPhrase : ${user.company.catchPhrase}, BS : ${user.company.bs}`
          };
        });
        setUsersData(userData);
      })
      .catch(error => console.log('Error fetching data:', error)
      ), []
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Address',
      dataIndex: 'addressInfo',
      key: 'addressInfo'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website'
    },
    {
      title: 'Company',
      dataIndex: 'companyInfo',
      key: 'companyInfo'
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={usersData} />
    </div>
  );
};

export default FetchUser;