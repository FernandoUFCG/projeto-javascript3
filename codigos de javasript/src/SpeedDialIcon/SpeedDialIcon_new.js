import React from 'react';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';

export function SpeedDialIcon_new(props) {
  const { classes, icon: iconProp, open, openIcon: openIconProp, ...other } = props;

  const iconClassName = classNames(classes.icon, {
    [classes.iconOpen]: open,
    [classes.iconWithOpenIconOpen]: openIconProp && open,
  });
  const openIconClassName = classNames(classes.openIcon, { [classes.openIconOpen]: open });

  function formatIcon(icon, className) {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { className });
    }

    return icon;
  }

  return (
    <span className={classes.root} {...other}>
      {openIconProp ? formatIcon(openIconProp, openIconClassName) : null}
      {iconProp ? formatIcon(iconProp, iconClassName) : <AddIcon className={iconClassName} />}
    </span>
  );
}
