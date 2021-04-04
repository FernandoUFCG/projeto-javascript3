import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SpeedDialIcon_new } from './SpeedDialIcon_new';

const styles = theme => ({
  root: {
    height: 24,
  },
  icon: {
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
  },
  iconOpen: {
    transform: 'rotate(45deg)',
  },
  // Style applied to the icon if there is an openIcon, when the SpeedDial is open
  iconWithOpenIconOpen: {
    opacity: 0,
  },
  openIcon: {
    position: 'absolute',
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
    opacity: 0,
    transform: 'rotate(-45deg)',
  },
  openIconOpen: {
    transform: 'rotate(0deg)',
    opacity: 1,
  },
});

SpeedDialIcon_new.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The icon to display in the SpeedDial Floating Action Button.
   */
  icon: PropTypes.node,
  /**
   * @ignore
   * If `true`, the SpeedDial is open.
   */
  open: PropTypes.bool,
  /**
   * The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.
   */
  openIcon: PropTypes.node,
};

SpeedDialIcon_new.muiName = 'SpeedDialIcon';

export default withStyles(styles)(SpeedDialIcon_new);
