import React, {
    useState,
    useEffect,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from 'react';
import {
    View,
    TextInput,
    Animated,
    Text,
    StyleSheet,
    Platform,
} from 'react-native';
import lightColors from './colors';

// const InputCus = React.forwardRef((props, ref) => {

//     return <TextInput type="text" placeholder="Hello World" ref={ref} {...props} />
// }

// );
const InputCus = forwardRef((props, ref) => {
    const {
        placeholder,
        errorText,
        valid,
        errorColor,
        disabled,
        value,
        prefix,
        sufix,
        styleInput,
        styleLabel,
        styleError,
        styleContent,
        styleBodyContent,
        styleUnderLine,

        ...others
    } = props;
    const [showInput, setShowInput] = useState(false);
    const [showError, setShowError] = useState(false);
    const [animatedIsFocused] = useState(new Animated.Value(1));
    const [isInputFocused, setInputFocus] = useState(false);

    const inputFontSize = styleInput.fontSize || styles.input.fontSize;
    const labelFontSize = styleLabel.fontSize || styles.label.fontSize;
    const errorFontSize = styleError.fontSize || styles.error.fontSize;

    useEffect(() => {
        setShowError(!valid);
        if (value) {
            setShowInput(true);
        }
        if (value && !showInput) {
            startAnimation();
        }
        animationView();
    }, [
        valid,
        value,
        animationView,
        animationLabelFontSize,
        animatedIsFocused,
        startAnimation,
        showInput,
    ]);

    const onBlur = () => {
        setInputFocus(false);
        if (!value) {
            setShowInput(false);
            setShowError(false);
            startAnimation();
        }
    };

    const onFocus = () => {
        setInputFocus(true);
        if (!showInput) {
            startAnimation();
        }
    };
    useImperativeHandle(ref, () => ({
        fosCusTextInput: onFocus,
    }));

    const borderColor = () => {
        const borderStyle = {};
        borderStyle.borderBottomColor =
            styleUnderLine.borderBottomColor ||
            styles.bodyContent.borderBottomColor;
        if (showError) {
            borderStyle.borderBottomColor =
                errorColor || lightColors.colors.redStar;
        }
        return borderStyle;
    };

    const setContentHeight = () => {
        const fontsHeight = labelFontSize + inputFontSize + errorFontSize + 10;
        const internalVerticalSpaces = 16;
        return fontsHeight + internalVerticalSpaces;
    };

    const getErrorContentSpace = () => {
        return errorFontSize + 2;
    };

    const startAnimation = useCallback(() => {
        Animated.timing(animatedIsFocused, {
            toValue: showInput ? 1 : 0,
            duration: 50,
            useNativeDriver: false,
        }).start(() => {
            if (!showInput) {
                setShowInput(true);
            }
        });
    }, [animatedIsFocused, showInput]);

    const animationView = useCallback(() => {
        const sizeShow = 15 + labelFontSize + inputFontSize;
        const sizeHide = 15 + labelFontSize;
        const inputAdjust = {
            height: animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [sizeShow, sizeHide],
            }),
        };
        return inputAdjust;
    }, [animatedIsFocused, inputFontSize, labelFontSize]);

    const animationLabelFontSize = useCallback(() => {
        const fontAdjust = {
            fontSize: animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [labelFontSize, inputFontSize],
            }),
        };
        return fontAdjust;
    }, [animatedIsFocused, inputFontSize, labelFontSize]);

    return (
        <View
            style={[
                styles.content,
                styleContent,
                { height: setContentHeight() },
            ]}>
            <Animated.View
                style={[styles.bodyContent, styleBodyContent, animationView()]}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                    <Animated.Text
                        style={[
                            styles.label,
                            styleLabel,
                            animationLabelFontSize(),
                        ]}
                        onPress={() => !disabled && onFocus()}>
                        {placeholder}
                    </Animated.Text>
                    {showInput && (
                        <View style={styles.toucheableLineContent}>
                            <>{prefix}</>
                            <TextInput
                                {...others}
                                value={value}
                                ref={ref}
                                pointerEvents={disabled ? 'box-none' : 'auto'}
                                selectionColor={styleInput.fontColor}
                                autoFocus
                                blurOnSubmit
                                editable={!disabled}
                                onBlur={() => onBlur()}
                                style={[styles.input, styleInput,]}
                                underlineColorAndroid="transparent"
                                onEndEditing={() => onBlur()}
                            />
                        </View>
                    )}
                </View>
                <View style={styles.sufix}>{sufix}</View>
            </Animated.View>
            <View
                style={[
                    { marginTop: 0 },
                    styleUnderLine,
                    borderColor(showError),
                    {
                        marginBottom: showError ? 0 : getErrorContentSpace(),
                        borderBottomWidth: isInputFocused ? 1.5 : 0.5,
                    },
                ]}
            />
            {showError && (
                <Text
                    style={[
                        styles.error,
                        errorColor && { color: errorColor },
                        styleError,
                    ]}>
                    {errorText}
                </Text>
            )}
        </View>
    );
    // return <TextInput type="text" placeholder="Hello World" ref={ref} {...props} />
});

InputCus.defaultProps = {
    valid: true,
    disabled: false,
    value: '',
    styleInput: {},
    styleBodyContent: {},
    styleLabel: {},
    styleError: {},
    styleUnderLine: {},
};
const styles = StyleSheet.create({
    content: {
        justifyContent: 'flex-end',
        marginVertical: 1,
    },
    input: {
        fontSize: 16,
        flex: 1,
    },
    bodyContent: {
        borderBottomColor: 'black',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    toucheableLineContent: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    label: {
        fontSize: 14,
        color: '#606060',
        fontWeight: '600',
    },
    error: {
        color: '#d32f2f',
        fontSize: 13,
        marginTop: 2,
    },
    sufix: {
        flexDirection: 'column-reverse',
    },
});

export default InputCus;
