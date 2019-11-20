import React from 'react'
import { Formik, Field, Form } from 'formik'
import classNames from 'classnames'
import BasicFormSchema from '../../BasicFormSchema'
import './index.scss'
import { ReactComponent as Search } from '../../assets/Search.svg'
import ButtonSelect from '../ButtonSelect'
import Button from '../Button'

const SearchForm = props => {
  return (
    <Formik
      initialValues={{
        search: ''
      }}
      validationSchema={BasicFormSchema}
      onSubmit={value => {
        setTimeout(() => {
          alert(JSON.stringify(value, null, 2))
        }, 300)
      }}
    >
      {({ errors, touched }) => (
        <Form className="InvitationSearch">
          <div
            className={classNames('InvitationSearch__search', {
              'InvitationSearch__search--invalid':
                errors.search && touched.search
            })}
          >
            <span className="InvitationSearch__icon">
              <Search />
            </span>

            <Field
              className="InvitationSearch__input"
              name="search"
              placeholder="Name or email"
              type="text"
            />

            <ButtonSelect />
          </div>

          <Button type="submit" typePrimary>
            Invite 1 person
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SearchForm
