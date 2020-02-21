# 恢复您的2fa启用的帐户
根据不同的情况，您可以恢复对启用了2fa的帐户的访问。
## 错位第二因子装置
如果您放错了提供第二因素身份验证的设备，您可以使用启用2FA访问您的帐户时生成的恢复码。
1. 找到您在帐户上启用2FA时生成的恢复码。
2. 如果您已注销，请在命令行上使用npm用户名和npm密码登录。
```cli
npm login
```
3. 当提示输入OTP时，输入恢复代码。
4. 登录后，请键入npm profile disable-2fa，如果提示，请输入npm密码。
5. 看到此提示时，请输入未使用的恢复代码:
```cli
>Enter one-time password from your authenticator:
```
6. npm将确认双因素身份验证已被禁用。
7. 输入npm profile enable-2fa来重新启用2FA，为您的帐户分配不同的设备，并生成新的恢复代码。
> 注意:使用恢复码重新启用2FA可能会创建第二个具有相同npm帐户名称的authenticator帐户。要删除旧的authenticator帐户，请按照authenticator的步骤操作。
## 错误的恢复代码
如果您丢失了提供第二因素身份验证的设备和您的恢复码，我们可能无法帮助您恢复您的帐户。如果您有任何问题，请联系npm支持。