#### PageNotFound component

```js
import React from 'react'
import classes from '../classes.module.css'

const redirect = () => {
  console.log('#redirect')
}

;<PageNotFound className={classes['bg-grey-3-bg']} onClick={redirect} />
```
