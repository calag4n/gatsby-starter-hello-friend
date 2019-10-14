/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { OutlineInput } from 'fan-see-comp'
import Layout from '../components/layout'
import SEO from '../components/seo'
import H1 from '../components/H1'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 623px;
`

const Group = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  flex-wrap: wrap;
  justify-content: space-between;

  &.message div {
    width: 100% !important;
  }
  & div {
    margin: 1em;

    @media (max-width: 484px) {
      width: 60%;
      font-size: 0.8em;
    } 
  
  }
  & label {
    margin: 1em 0 1em 1em;
    padding-top: 0.3em;
  }
`
const LabelGroup = styled.div`
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  @media (max-width: 484px) {
    width: 100% !important;
    justify-content: space-between;
  }
`

const Contact = () => (
  <Layout>
    <SEO title='Contact' description='Les moyens de me contacter.' />

    <H1>Contact</H1>

    <Form
      method="post"
      action="#"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p>Vous pouvez me laisser un message via ce formulaire.</p>
      <Group>
        <LabelGroup>
          <label htmlFor='name'>Nom :</label>
          <OutlineInput
            lineColor='#fc2f70'
            width='8em'
            height='2em'
            name='name'
            required
          />
        </LabelGroup>
        <LabelGroup>
          <label htmlFor='surname'>Prénom :</label>
          <OutlineInput
            lineColor='#fc2f70'
            width='8em'
            height='2em'
            name='surname'
            required
          />
        </LabelGroup>
      </Group>
      <Group>
        <LabelGroup>
          <label htmlFor='phone'>Tel. :</label>
          <OutlineInput
            lineColor='#fc2f70'
            placeholder='(optionnel)'
            width='8em'
            name='phone'
          />
        </LabelGroup>
        <LabelGroup>
          <label htmlFor='mail'>Mail :</label>
          <OutlineInput
            lineColor='#fc2f70'
            type='mail'
            width='10em'
            name='mail'
            required
          />
        </LabelGroup>
      </Group>
      <Group className='message'>
        <OutlineInput
          lineColor='#fc2f70'
          placeholder='Message'
          type='textarea'
          width='100%'
          height='16em'
          name='message'
          className='message'
          required
        />
      </Group>
      <OutlineInput type='submit' />
    </Form>
  </Layout>
)

export default Contact
