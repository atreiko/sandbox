
                                    REGISTRATION
 = FRONT ================================== || = BACK ==================================
                                            ||
1. POST     api/auth/signup                 ||
return { username, email, role, password }  ||
                                            ||   2. Checking Existing. Save user to DB
                                            ||
3. return Message('Registered Successful)   ||


                                    LOGIN
 = FRONT ================================== || = BACK ==================================
                                            ||
1. POST     api/auth/signup                 ||
return{ username, password }                ||
                                            ||   2. Authenticate { username, password }
                                            ||      Create JWT string with a secret
3. return { token, user info, authorities } ||
                                            ||
4. Request data with JWT on                 ||           
x-access-token Header                       ||
                                            || 5. Check JWT. Get user info & authenticate
                                            ||    Authorize using user's Authorities
6. return Content based on Authorities      ||
                                            ||