import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Badge,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import Moment from 'react-moment';

import { Colxx } from '../../components/common/CustomBootstrap';
import { getRoleName } from '../../helpers/authHelper';
import IntlMessages from '../../helpers/IntlMessages';

const ImageListView = ({ item, isSelect, collect, onCheckItem, handleEdit }) => {
  const user = item;
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={user.id}>
      <ContextMenuTrigger id="menu_id" data={user.id} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, user.id)}
          className={classnames({
            active: isSelect,
          })}
        >
          <div className="position-relative">
            <NavLink to={`?p=${user.id}`} className="w-40 w-sm-100">
              <CardImg top
                alt={user.title}
                src='/assets/img/profiles/l-default.jpg' />
            </NavLink>
            <Badge
              color={user.statusColor}
              pill
              className="position-absolute badge-top-left"
            >
              {getRoleName(user.role)}
            </Badge>
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="2">
                <CustomInput
                  className="item-check mb-0"
                  type="checkbox"
                  id={`check_${user.id}`}
                  checked={isSelect}
                  onChange={() => { }}
                  label=""
                />
              </Colxx>
              <Colxx xxs="10" className="mb-3">
                <CardSubtitle>{user.name}</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  <Moment format="YYYY-MM-DD">
                    {user.created_at}
                  </Moment>
                </CardText>
              </Colxx>
            </Row>
            <div className="float-right align-self-center mr-3" >
              <Button
                size="xs"
                color="outline-success"
                className=""
                onClick={() => handleEdit(user)}
              >
                <IntlMessages id="menu.edit" />
              </Button>
            </div>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
