# Proxy

Using Proxy design pattern extend an object representing of a user to store user password as “\*”. The user object should have the following properties:

- password - storing the user password as “\*”
- \_password - storing the actual user password but not accessible
- name

1. Create a user object with the following properties
2. Create a proxy object that extends the user object and stores the password as “\*”. When password is set, it should store the password in the \_password property. Also, the password should be stored as “\*” in the password property.
3. When the password is accessed, it should return the password as “\*”. If private \_password property is accessed, it should throw an error.
