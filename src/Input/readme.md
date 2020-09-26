#### Input component

```js
import Grid from '../Grid'
const { Container, Row, Col } = Grid
;<Container>
  <Row>
    <Col md={3}>
      <Input defaultValue="name"  />
    </Col>
    <Col md={3}>
      <Input status="disabled" defaultValue="disabled" />
    </Col>
    <Col md={3}>
      <Input status="error" defaultValue="error info" />
    </Col>
    <Col md={3}>
      <Input status="warning" defaultValue="warning" />
    </Col>
  </Row>
</Container>
```

#### Input with suffix and prefix

```js
<Input
  suffix={<span style={{ lineHeight: '3rem' }}>suf</span>}
  prefix={<span style={{ lineHeight: '3rem' }}>pre</span>}
/>
```

#### Input with mask

```js
<Input mask="+7 (999) 999 99 99" maskChar="_" />
```
#### Input for currency
```js
const [value, setValue] = React.useState(1000)
;<Input currency  value={value} onChange={e => setValue(e.target.value)}/>
```

#### Input fits to its parent width

```js
<Input defaultValue="value" block />
```
