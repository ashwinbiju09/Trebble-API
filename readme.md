
## API Reference

#### login

```http
  GET api/v1/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Name of the user |
| `email` | `string` | Email id of the user  |
| `password` | `string` | password for the email handel  |
| `password_confirmation` | `string` | Retyped password |

| Status Code | Structure | Example |
| ---------- |--------- | ------ |
| 200 | { <br> status: string , <br> token: string, <br> user: <br> "user object" <br>} | {<br>status: "success",<br>token: "3\|TNc0pHeT9AdQjlTjHiRBKy7ksxqFFV2lCaahuC6T",<br>user: {<br> id: 2, <br>name: "user-1",<br>email: "test1@2test.com",<br>email_verified_at: null,<br>created_at: "2023-07-06T09:55:38.000000Z",<br>updated_at: "2023-07-06T09:55:38.000000Z"<br>}<br>} |



#### register user

```http
  GET api/v1/auth/register
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Name of the user |
| `email` | `string` | Email id of the user  |
| `password` | `string` | password for the email handel  |
| `password_confirmation` | `string` | Retyped password |

####

```http
  GET api/v1/admin/user
```


| Auth | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Auth Key` | Bearer Token | Response of token that is returned by login |

| Status Code | Structure | Example |
| ---------- |--------- | ------ |
| 200 | { <br> data: <br> "user object" <br>} | { <br>data: { <br>id: 1, <br>name: "user-1",<br>email: "test1@test.com",<br>email_verified_at: null,<br>created_at: "2023-07-06T09:45:39.000000Z",<br>updated_at: "2023-07-06T09:45:39.000000Z",<br>is_admin: 1<br>}<br>} |



#### verify email
    
    ```http
    POST api/v1/auth/email/send
    ```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Name of the user |
| `email` | `string` | Email id of the user  |
| `password` | `string` | password for the email handel  |
| `password_confirmation` | `string` | Retyped password |

