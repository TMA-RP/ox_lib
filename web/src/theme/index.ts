import { MantineThemeOverride  } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: (theme, params) => ({
        root: {
          border: 'none',
          backgroundColor: params.variant === "light" ? "rgb(93, 236, 255)" : undefined,
          color: params.variant === "light" ? "black" : undefined,
          '&:hover': {
            backgroundColor: params.variant === "light" ? "#4AB4C4" : undefined,
          }
        }
      }),
    },
    Modal: {
        styles: {
            modal: {
                background: "rgba(0, 0, 0, .9)",
                boxShadow: "0 0 0.5em 0.05em rgb(93, 236, 255)",
                borderRadius: ".7em",
            }
        }
    },
    Checkbox: {
        styles: {
            icon: {
                color: "black !important",
            },
            input: {
                "&:checked": {
                    background: "rgb(93, 236, 255)"
                }
            }
        }
    },
    Slider: {
        styles: {
            bar: {
                background: "rgb(93, 236, 255)"
            },
            thumb: {
                background: "rgb(93, 236, 255)"
            },
            mark: {
                display: "none"
            }
        }
    },
    Input: {
        styles: {
            input: {
                "&:focus": {
                    borderColor: "rgb(93, 236, 255)"
                }
            }
        }
    },
    ColorInput: {
        styles: {
            input: {
                "&:focus": {
                    borderColor: "rgb(93, 236, 255)"
                }
            }
        }
    },
    Textarea: {
        styles: {
            input: {
                "&:focus": {
                    borderColor: "rgb(93, 236, 255)"
                }
            }
        }
    },
    TextInput: {
        styles: {
            input: {
                "&:focus": {
                    borderColor: "rgb(93, 236, 255)"
                }
            }
        }
    },
  },
};
