const NAV_BAR_HEIGHT = 39;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

module.exports = {
  navBarContainer: {
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButton: {
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
    position: 'absolute',
    textAlign: 'center',
  },
};
